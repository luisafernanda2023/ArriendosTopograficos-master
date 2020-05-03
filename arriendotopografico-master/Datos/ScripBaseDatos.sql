CREATE DATABASE [Clientes];

USE [Clientes]

CREATE TABLE [dbo].[Cliente](

[TipoId] [nvarchar](3) NULL,

[IdCliente] [int](10) NOT NULL PRIMARY KEY,

[Nombre] [nvarchar](15) NULL,

[Telefono] [int](10) NULL,

[Direccion] [nvarchar] (20) NULL,


)

GO

COMMIT