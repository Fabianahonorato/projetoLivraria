// Define a estrutura (formato) de um livro na aplicação
export interface Livro {
  codigo: string;       // Código gerado automaticamente (ex.: BK-2025-4321)
  titulo: string;       // Título do livro
  autor: string;        // Nome do autor
  descricao?: string;   // Sinopse (campo opcional, o ? indica isso)
  ano: number;          // Ano de lançamento
  paginas: number;      // Número de páginas
}