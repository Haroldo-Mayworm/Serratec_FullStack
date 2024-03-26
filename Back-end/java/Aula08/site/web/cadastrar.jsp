<%@page import="java.sql.*" %>
<%@page import="com.br.site.Conexao" %>

<%
    String nome = request.getParameter("nome");
    String cpf = request.getParameter("cpf");
    String endereco = request.getParameter("endereco");
    String cidade = request.getParameter("cidade");
    String telefone = request.getParameter("telefone");%>

<%=nome%> 
<%=cpf%> 
<%=endereco%> 
<%=cidade%> 
<%=telefone%> 


<%
    String query = "INSERT INTO clientes VALUES(null,?,?,?,?,?)";

    try {
        var conexao = Conexao.obterConexao();

        if (conexao != null) {
            PreparedStatement preparedStatement = conexao.prepareStatement(query);
            preparedStatement.setString(1, cpf);
            preparedStatement.setString(2, nome);
            preparedStatement.setString(3, endereco);
            preparedStatement.setString(4, cidade);
            preparedStatement.setString(5, telefone);
            preparedStatement.executeUpdate();
            out.println("Cadastro realizado com sucesso!");
        } else {
            out.println("Cadastro não realizado.");
        }
    } catch (SQLException e) {
        e.printStackTrace(); // Lida com erros de conexão
    }
%>