<%@page import="com.br.site.Conexao"%>
<%@page  import="java.sql.*" %>

<% String cpf = request.getParameter("cpf");
    String novoNome = request.getParameter("novoNome");
    String novoEndereco = request.getParameter("novoEndereco");
    String novaCidade = request.getParameter("novaCidade");
    String novoTelefone = request.getParameter("novoTelefone");

    String query = "UPDATE clientes SET nome = ?, endereco = ?, cidade = ?, telefone = ? WHERE cpf = ?";

    try {
        var conexao = Conexao.obterConexao();

        if (conexao != null) {
            PreparedStatement preparedStatement = conexao.prepareStatement(query);
            preparedStatement.setString(1, novoNome);
            preparedStatement.setString(2, novoEndereco);
            preparedStatement.setString(3, novaCidade);
            preparedStatement.setString(4, novoTelefone);
            preparedStatement.setString(5, cpf);
            preparedStatement.executeUpdate();
            out.println("Edição realizada com sucesso!");
        } else {
            out.println("Edição não realizada.");
        }
    } catch (SQLException e) {
        e.printStackTrace();

    }
%>