<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.br.dao.model.Livro" %>
<%@ page import="com.br.dao.dao.LivroDAO" %>

<%
    // Obtendo o ID do livro a ser editado a partir dos parâmetros da requisição
    int idLivro = Integer.parseInt(request.getParameter("id"));

    // Obtendo o novo nome do livro a partir dos parâmetros da requisição
    String novoNome = request.getParameter("novoNome");

    // Criando uma instância do LivroDAO
    LivroDAO livroDAO = new LivroDAO();

    // Criando um objeto Livro com o novo nome
    Livro livro = new Livro(idLivro, novoNome);

    // Atualizando o livro no banco de dados
    livroDAO.atualizarLivro(livro, idLivro);

    // Redirecionando o usuário de volta para a página de listagem de livros
    response.sendRedirect("listarLivros.jsp");
%>