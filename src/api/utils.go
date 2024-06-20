package api

import "io"

func ProcessMD(file io.Reader) (string, error) {
	content, err := io.ReadAll(file)
	if err != nil {
		return "", err
	}
	return string(content), nil
}
