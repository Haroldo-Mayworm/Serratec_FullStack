<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <style>@import 'css/menu.css';</style>
    </head>
    <body>
        <nav class="menu">
            <a href="index.jsp">Cadastrar</a>
            <a href="listarLivros.jsp">Listar</a>
            <a href="frmEditarLivro.jsp">Editar</a>
            <a href="frmExcluirLivro.jsp">Excluir</a>
        </nav>

        <h1>Formulário para Salvar Livro</h1>

        <form action="salvarLivro.jsp" method="post">
            <label for="nomeLivro">Nome do Livro:</label>
            <input type="text" id="nomeLivro" name="nomeLivro">
            <button type="submit">Salvar</button>
        </form>
    </body>
</html>
