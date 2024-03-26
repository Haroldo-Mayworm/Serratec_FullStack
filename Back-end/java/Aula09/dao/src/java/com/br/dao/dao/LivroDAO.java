package com.br.dao.dao;

import com.br.dao.util.Conexao;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import com.br.dao.model.Livro;

public class LivroDAO {

    private static final String INSERIR_LIVRO_SQL = "INSERT INTO livros (nomeLivro) VALUES (?)";
    private static final String LISTAR_LIVROS_SQL = "SELECT * FROM livros";
    private static final String ATUALIZAR_LIVRO_SQL = "UPDATE livros SET nomeLivro = ? WHERE idLivro = ?";
    private static final String EXCLUIR_LIVRO_SQL = "DELETE FROM livros WHERE idLivro = ?";

    public void adicionarLivro(Livro livro) {
        try (Connection connection = Conexao.obterConexao(); 
            PreparedStatement preparedStatement = connection.prepareStatement(INSERIR_LIVRO_SQL)) {
            preparedStatement.setString(1, livro.getNome());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace(); // Lida com erros de conexão
        }
    }

    public List<Livro> listarLivros() {
        List<Livro> livros = new ArrayList<>();
        try (Connection connection = Conexao.obterConexao(); 
            PreparedStatement preparedStatement = connection.prepareStatement(LISTAR_LIVROS_SQL); 
            ResultSet resultSet = preparedStatement.executeQuery()) {
            while (resultSet.next()) {
                int id = resultSet.getInt("idLivro");
                String nomeLivro = resultSet.getString("nomelivro");
                Livro livro = new Livro(nomeLivro, id);
                livros.add(livro);
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Lida com erros de conexão
        }
        return livros;
    }

    public void atualizarLivro(Livro livro, int id) {
        try (Connection connection = Conexao.obterConexao(); PreparedStatement preparedStatement = connection.prepareStatement(ATUALIZAR_LIVRO_SQL)) {
            preparedStatement.setString(1, livro.getNome());
            preparedStatement.setInt(2, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void excluirLivro(int id) {
        try (Connection connection = Conexao.obterConexao(); PreparedStatement preparedStatement = connection.prepareStatement(EXCLUIR_LIVRO_SQL)) {
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
