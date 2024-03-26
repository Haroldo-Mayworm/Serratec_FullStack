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
        <h1>Formulário para excluir Livro</h1>
        <form action="excluirLivro.jsp" method="post">
            <label for="nomeLivro">Informe o código do livro:</label>
            <input type="text" id="id" name="id" >
            <button type="submit">Salvar</button>
        </form>
    </body>
</html>