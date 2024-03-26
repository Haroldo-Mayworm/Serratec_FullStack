<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.br.dao.model.Livro" %>
<%@ page import="com.br.dao.dao.LivroDAO" %>

<%
    // Obtendo o ID do livro a ser excluído a partir dos parâmetros da requisição
    int idLivro = Integer.parseInt(request.getParameter("id"));

    // Criando uma instância do LivroDAO
    LivroDAO livroDAO = new LivroDAO();

    // Excluindo o livro com o ID especificado
    livroDAO.excluirLivro(idLivro);

    // Redirecionando o usuário de volta para a página de listagem de livros
    response.sendRedirect("listarLivros.jsp");
%>