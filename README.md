# mssql-test

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## MS SQL Server Installation & Configuration

- Download the SQL Server 2019 Developer from [here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- Follow through the installation steps
- To help with administration download SQL Server Studio [here](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
- Install SQL Server Management Studio
- Enable SQL Authentication Login - see https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver15
- Open Computer Management in Windows 10 (Start -> Computer Management)
- Expand Services & Applications -> SQL Server Config manager -> SQL Server Network Configuration -> Protocols for MSSQLSERVER
- Ensure TCP/IP is enabled. If disabled, right click TCP/IP -> Properties
- Under Protocal Tab -> Enabled set to Yes
- Under IP Addreses tab, set all TCP Port value to 0 (zero) except for _IPAll_ section. Under IPAll set the tcp port to 1433
- Save all options
- Goto SQL Server Services in Computer management
- Restart all services

# Create the database and you user

- Open SQL Server Management Studio (SSMS), create new database called **lb4demo**
- Expand Security -> Logins
- Right click on Logins, and select _New Login..._
- Enter user details. Username: **lb4demo**, Password: **lb4demo**
- Select **lb4demo** under _Default Database_
- Select _User Mapping_ from the left pane
- Enable (tick) lb4demo under _Map_, for default schema enter **dbo**
- Click OK and close window
- Try to connect to SQL Server using your new username and password (lb4demo / lb4demo)
- If successful move on, if not troubleshoot until this step is successful

# Create the test table

Create test table _company_ with this SQL:

```
CREATE TABLE [dbo].[company](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](200) NOT NULL,
	[registration_no] [varchar](20) NOT NULL,
	[notes] [text] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
```

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## View APIs

If you have reached here, then congratulations. You can view the list of APIs by going to http://localhost:3000
