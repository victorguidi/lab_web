package sql

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"reflect"

	"github.com/joho/godotenv"

	_ "github.com/lib/pq"
)

var connStr string

func init() {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}

	connStr = fmt.Sprintf("user=%s dbname=lab password=%s host=%s port=%s sslmode=disable",
		os.Getenv("DBUSER"),
		os.Getenv("DBPASSWORD"),
		os.Getenv("DBHOST"),
		os.Getenv("DBPORT"))
}

type SqlDB struct {
	db *sql.DB
}

func NewDB() *SqlDB {
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Panic(err)
	}

	return &SqlDB{
		db: db,
	}
}

func (d SqlDB) DeleteOne(query string) error {
	_, err := d.db.Exec(query)
	return err
}

func (d SqlDB) Clean(query string) error {
	_, err := d.db.Exec(query)
	return err
}

func (d SqlDB) Get(query string, obj interface{}, params ...any) error {
	return d.querySingle(query, obj, params...)
}

func (d SqlDB) GetAll(query string, objs interface{}) error {
	return d.queryMultiple(query, objs)
}

func (d SqlDB) Insert(query string, obj interface{}, params ...any) error {
	// query := "INSERT INTO table (columns) VALUES (values)"
	_, err := d.db.Exec(query, params...)
	return err
}

func (d SqlDB) querySingle(query string, obj interface{}, args ...interface{}) error {
	row := d.db.QueryRow(query, args...)
	return mapSingleRowToStruct(row, obj)
}

func (d SqlDB) queryMultiple(query string, objs interface{}, args ...interface{}) error {
	rows, err := d.db.Query(query, args...)
	if err != nil {
		return err
	}
	defer rows.Close()

	err = mapRowsToStruct(rows, objs)
	if err != nil {
		return err
	}
	return nil
}

func mapSingleRowToStruct(row *sql.Row, obj interface{}) error {
	objValue := reflect.Indirect(reflect.ValueOf(obj))
	fields := make([]interface{}, objValue.NumField())

	for i := 0; i < objValue.NumField(); i++ {
		fields[i] = objValue.Field(i).Addr().Interface()
	}

	err := row.Scan(fields...)
	if err != nil {
		return err
	}

	return nil
}

func mapRowsToStruct(rows *sql.Rows, objs interface{}) error {
	sliceValue := reflect.Indirect(reflect.ValueOf(objs))
	elemType := sliceValue.Type().Elem()

	for rows.Next() {
		obj := reflect.New(elemType).Elem()
		fields := make([]interface{}, obj.NumField())
		for i := 0; i < obj.NumField(); i++ {
			fields[i] = obj.Field(i).Addr().Interface()
		}

		err := rows.Scan(fields...)
		if err != nil {
			return err
		}

		sliceValue.Set(reflect.Append(sliceValue, obj))
	}

	return rows.Err()
}
