// ============================================================
// EXERCÍCIO: LivroService
//
// Implemente os cinco métodos marcados com TODO abaixo.
// O serviço é responsável por manter a lista de livros de
// forma reativa (via Signals) e persistir os dados no
// localStorage do navegador.
// ============================================================

import { Injectable, signal, computed } from '@angular/core';
import { Livro } from '../models/livro';

// Chave utilizada para ler/gravar no localStorage
const CHAVE_ARMAZENAMENTO = 'livraria_livros';

@Injectable({ providedIn: 'root' })
export class LivroService {

  // Signal privado que armazena a lista de livros.
  // É inicializado chamando _carregarDoArmazenamento().
  private readonly _livros = signal<Livro[]>(this._carregarDoArmazenamento());

  // Expõe a lista como somente-leitura para os componentes.
  readonly livros = this._livros.asReadonly();

  // Computed que recalcula o total de livros automaticamente.
  readonly quantidade = computed(() => this._livros().length);

  // ----------------------------------------------------------
  // TODO 1 — _carregarDoArmazenamento()
  //
  // Objetivo: ler os livros salvos no localStorage quando o
  // serviço é criado pela primeira vez.
  //
  // Passos:
  //  1. Leia o item do localStorage com a chave CHAVE_ARMAZENAMENTO.
  //  2. Se existir, converta de JSON para Livro[] com JSON.parse.
  //  3. Se não existir, retorne um array vazio [].
  //  4. Envolva tudo em try/catch e retorne [] em caso de erro,
  //     pois o localStorage pode estar corrompido ou indisponível.
  // ----------------------------------------------------------
  private _carregarDoArmazenamento(): Livro[] {
    // TODO: implemente aqui
    return [];
  }

  // ----------------------------------------------------------
  // TODO 2 — _salvar(livros)
  //
  // Objetivo: método interno reutilizável que atualiza o signal
  // E persiste a lista no localStorage em uma única chamada.
  //
  // Passos:
  //  1. Atualize o signal com this._livros.set(livros).
  //  2. Serialize a lista com JSON.stringify e salve no
  //     localStorage usando a chave CHAVE_ARMAZENAMENTO.
  // ----------------------------------------------------------
  private _salvar(livros: Livro[]): void {
    // TODO: implemente aqui
  }

  // Gera um código único no formato BK-AAAA-XXXX
  gerarCodigo(): string {
    const ano = new Date().getFullYear();
    const existentes = new Set(this._livros().map(l => l.codigo));
    let codigo: string;
    do {
      codigo = `BK-${ano}-${Math.floor(1000 + Math.random() * 9000)}`;
    } while (existentes.has(codigo));
    return codigo;
  }

  // ----------------------------------------------------------
  // TODO 4 — adicionarLivro(livro)
  //
  // Objetivo: inserir um novo livro no final da lista e
  // persistir a alteração.
  //
  // Passos:
  //  1. Crie uma nova lista com todos os livros atuais mais o
  //     novo, usando o spread operator: [...this._livros(), livro].
  //  2. Passe a nova lista para this._salvar().
  // ----------------------------------------------------------
  adicionarLivro(livro: Livro): void {
    // TODO: implemente aqui
  }

  // ----------------------------------------------------------
  // TODO 5 — removerLivro(codigo)
  //
  // Objetivo: remover da lista o livro cujo codigo seja igual
  // ao parâmetro recebido e persistir a alteração.
  //
  // Passos:
  //  1. Filtre a lista atual removendo o livro com o código
  //     correspondente: this._livros().filter(l => l.codigo !== codigo).
  //  2. Passe a lista filtrada para this._salvar().
  // ----------------------------------------------------------
  removerLivro(codigo: string): void {
    // TODO: implemente aqui
  }
}
