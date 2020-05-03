using System;
using Entity;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Datos
{
    public class ClienteRepository
    {
        private readonly SqlConnection _connection;
        private readonly List<Cliente> _cliente = new List<Cliente>();

        public ClienteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }
        public void guardar(Cliente cliente)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Cliente (TipoId, IdCliente, Nombre, Telefono, Direccion)
values (@TipoId, @IdCliente, @Nombre, @Telefono, @Direccion)";
                command.Parameters.AddWithValue("@TipoId", cliente.TipoId);
                command.Parameters.AddWithValue("@IdCliente", cliente.IdCliente);
                command.Parameters.AddWithValue("@Nombre", cliente.Nombre);
                command.Parameters.AddWithValue("@Telefono", cliente.Telefono);
                command.Parameters.AddWithValue("@Direccion", cliente.Direccion);
                var filas = command.ExecuteNonQuery();
            }
        }

       
        public List<Cliente> consultarTodos()
        {
           SqlDataReader dataReader;
            List<Cliente> clientes = new List<Cliente>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from cliente ";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Cliente cliente = DataReaderMapToCliente(dataReader);
                        clientes.Add(cliente);
                    }
                }
            }
            return clientes;
        }

        public Cliente buscar(string IdCliente)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from cliente where Identifacion-@IdCliente";
                command.Parameters.AddWithValue("@IdCliente", IdCliente);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMapToCliente(dataReader);
            }
        }
        public Cliente DataReaderMapToCliente(SqlDataReader dataReader)
        {
            if (!dataReader.HasRows) return null;
            Cliente cliente = new Cliente();
            cliente.TipoId = (string)dataReader["TipoId"];
            cliente.IdCliente = (int)dataReader["IdCliente"];
            cliente.Nombre = (string)dataReader["Nombre"];
            cliente.Telefono = (int)dataReader["Telefono"];
            cliente.Direccion = (string)dataReader["Direccion"];
            return cliente;
        }
     


    }
}
