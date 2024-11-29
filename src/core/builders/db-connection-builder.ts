import mongoose from "mongoose";

export default class DBConnectionBuilder {
    private baseUrl: string;
    private dbHost: string;
    private dbPort: number;
    private dbUsername: string;
    private dbPassword: string;
    private dbName: string;
    private static instance: DBConnectionBuilder;

    private constructor() {
        this.baseUrl = "";
        this.dbHost = "";
        this.dbPort = 27017;
        this.dbUsername = "";
        this.dbPassword = "";
        this.dbName = "";
    }

    public static getInstance(): DBConnectionBuilder {
        if (!DBConnectionBuilder.instance) {
            DBConnectionBuilder.instance = new DBConnectionBuilder();
        }
        return DBConnectionBuilder.instance;
    }

    public withBaseUrl(baseUrl: string): DBConnectionBuilder {
        this.baseUrl = baseUrl;
        return this;
    }

    public withDBHost(dbHost: string): DBConnectionBuilder {
        this.dbHost = dbHost;
        return this;
    }

    public withDBPort(dbPort: number): DBConnectionBuilder {
        this.dbPort = dbPort;
        return this;
    }

    public withDBName(dbName: string): DBConnectionBuilder {
        this.dbName = dbName;
        return this;
    }

    public withDBCredentials(
        dbUsername: string,
        dbPassword: string
    ): DBConnectionBuilder {
        this.dbUsername = dbUsername;
        this.dbPassword = dbPassword;
        return this;
    }

    public async build(): Promise<void> {
        const dbConStr: string = `${this.baseUrl}://${this.dbUsername}:${this.dbPassword}@${this.dbHost}${this.baseUrl == "mongodb" ? "&dbName=".concat(this.dbName) : "/".concat(this.dbName)}`;
        await mongoose
            .connect(dbConStr, {
                socketTimeoutMS: 10000,
            })
            .then(() => {
                console.info("Connected to MongoDB:", { DB_NAME: this.dbName });
            })
            .catch((error) => {
                console.error("Error connecting to MongoDB:", error);
            });
    }

}