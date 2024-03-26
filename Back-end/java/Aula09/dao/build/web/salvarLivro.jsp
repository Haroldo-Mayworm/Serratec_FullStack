<%@page import="com.br.dao.dao.LivroDAO"%>
<%@page import="com.br.dao.model.Livro"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            // Obtém o nome do livro do parâmetro do formulário
            String nomeLivro = request.getParameter("nomeLivro");
            int id = 0;

            // Verifica se o nome do livro não está vazio
            if (nomeLivro != null && !nomeLivro.isEmpty()) {
                // Cria um objeto Livro com o nome fornecido
                Livro livro = new Livro(nomeLivro, id);

                // Cria uma instância do LivroDAO para interagir com o banco de dados
                LivroDAO livroDAO = new LivroDAO();

                // Adiciona o livro ao banco de dados
                livroDAO.adicionarLivro(livro);

                // Redireciona o usuário de volta para a página do formulário
                response.sendRedirect("index.jsp");
            } else {
                // Caso o nome do livro seja vazio, exibe uma mensagem de erro
                out.println("<h2>O nome do livro não pode estar vazio!</h2>");
            }
        %>
    </body>
</html>