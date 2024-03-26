<%@page import="com.br.site.Conexao"%>
<%@page import="java.sql.*" %>

<%
    String query = "select * from clientes";

    try {
        var conexao = Conexao.obterConexao();

        if (conexao != null) {
            PreparedStatement preparedStatement = conexao.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                // Processar os resultados da consulta
                // Exemplo: Imprimir os resultados
                out.println("CPF: " + resultSet.getString("cpf") + "<br>");
                out.println("Nome: " + resultSet.getString("nome") + "<br>");
                out.println("Endereço: " + resultSet.getString("endereco") + "<br>");
                out.println("Cidade: " + resultSet.getString("cidade") + "<br>");
                out.println("Telefone: " + resultSet.getString("telefone") + "<br>");
                out.println("<hr>");
            }
        } else {
            out.println("Consulta não realizada.");
        }
    } catch (SQLException e) {
        e.printStackTrace(); // Lida com erros de conexão
    }
%>