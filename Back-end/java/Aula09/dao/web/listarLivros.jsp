<%@page import="java.util.List"%>
<%@page import="com.br.dao.model.Livro"%>
<%@page import="com.br.dao.dao.LivroDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>
            @import'css/menu.css';
        </style>
    </head>
    <body>
        <nav class="menu">
            <a href="index.jsp">cadastrar</a>
            <a href="listarLivros.jsp">listar</a>
            <a href="frmEditarLivro.jsp">editar</a>
            <a href="frmExcluirLivro.jsp">excluir</a>
        </nav>
        <h1>Listagem de livros</h1>
        <h1>Listar Livros</h1>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Nome do Livro</th>
            </tr>
            <%
                LivroDAO livroDAO = new LivroDAO();
                List<Livro> livros = livroDAO.listarLivros();
                for (Livro livro : livros) {
            %>
            <tr>
                <td><%= livro.getId()%></td>
                <td><%= livro.getNome()%></td>
            </tr>
            <% }%>
        </table>
    </body>
</html>