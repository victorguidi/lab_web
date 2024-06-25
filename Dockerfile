#STAGE 1.0: FRONTEND
FROM oven/bun:latest as fprod
WORKDIR /app
COPY ./web/package.json .
RUN  bun install
COPY ./web .
RUN bun run build
ENV NODE_ENV=production
EXPOSE 5173
CMD ["bun", "run", "dev"]

#STAGE: BACKEND
FROM golang:alpine AS backend
WORKDIR /app
COPY ./go.mod ./go.sum ./
RUN go mod download
COPY ./src .
RUN go build -v -o lab ./src/

FROM alpine:latest as bprod
WORKDIR /app
RUN adduser -D -H -h /app appuser # This steps are for security reason
# 755 is the code for rwxr-xr-x (read write execute for owner, read and execute for group and others)
RUN chown -R appuser /app && \
    chmod -R 755 /app &&
USER appuser
COPY --from=backend /app/lab /app/lab
COPY --from=backend /app/.env /app/.env
ENV ENV=PROD
EXPOSE 5000
CMD ["./lab"]
