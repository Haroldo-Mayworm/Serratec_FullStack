<%@page import="com.br.site.Conexao"%>
<%@page  import="java.sql.*" %>

<% String cpf = request.getParameter("cpf");
    String query = "DELETE FROM clientes WHERE cpf = ?";

    try {
        var conexao = Conexao.obterConexao();

        if (conexao != null) {
            PreparedStatement preparedStatement = conexao.prepareStatement(query);
            preparedStatement.setString(1, cpf);
            preparedStatement.executeUpdate();
            out.println("Dados excluidos");
        } else {
            System.out.println("Excluxão não realizada.");
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
%>



