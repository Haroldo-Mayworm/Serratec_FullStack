package com.br.dao.util;

import java.sql.*;

public class Conexao {

    private static final String URL = "jdbc:mysql://localhost:3306/sistemabiblioteca";
    private static final String USUARIO = "root";
    private static final String SENHA = "13579246";

    public static Connection obterConexao() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USUARIO, SENHA);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Driver do banco de dados não encontrado", e);
        }
    }

    public static void fecharConexao(Connection conexao) {
        if (conexao != null) {
            try {
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace(); // Lida com erros de fechamento de conexão
            }
        }
    }
}
