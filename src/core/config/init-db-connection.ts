import DBConnectionBuilder from "../builders/db-connection-builder";

export const initDBConnection = () => {
    const dbConnection: DBConnectionBuilder = DBConnectionBuilder.getInstance()
        .withBaseUrl(process.env.DB_BASE_URL ?? "")
        .withDBHost(process.env.DB_HOST ?? "")
        .withDBPort(Number(process.env.DB_PORT) ?? 27017)
        .withDBCredentials(process.env.DB_USERNAME ?? "", process.env.DB_PASSWORD ?? "")
        .withDBName(process.env.DB_NAME ?? "");
    dbConnection.build();
}