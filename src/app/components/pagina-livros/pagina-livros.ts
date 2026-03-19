// ============================================================
// EXERCÍCIO: PaginaLivrosComponente
//
// Implemente os itens marcados com TODO abaixo.
// Este componente exibe a lista de livros em uma tabela com
// busca em tempo real e botões de ação.
// ============================================================

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { Livro } from '../../core/models/livro';
import { LivroService } from '../../core/services/livro';


@Component({
  selector: 'app-pagina-livros',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
  ],
  templateUrl: './pagina-livros.html',
  styleUrl: './pagina-livros.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaLivrosComponente {

  private readonly livroServico = inject(LivroService);
  private readonly dialogo = inject(MatDialog);

  // Signal que guarda o texto digitado no campo de busca.
  // Já está implementado — serve de base para o TODO 1.
  readonly textoBusca = signal('');

  // Colunas exibidas na tabela — não é necessário alterar.
  readonly colunasExibidas: string[] = [
    'codigo', 'titulo', 'autor', 'ano', 'paginas', 'acoes',
  ];

  // ----------------------------------------------------------
  // TODO 1 — livrosFiltrados (computed)
  //
  // Objetivo: retornar a lista de livros filtrada com base no
  // texto de busca. O computed recalcula automaticamente
  // sempre que textoBusca ou a lista de livros muda.
  //
  // Passos:
  //  1. Obtenha e normalize o texto:
  //       const busca = this.textoBusca().toLowerCase().trim();
  //  2. Obtenha a lista completa:
  //       const livros = this.livroServico.livros();
  //  3. Se busca estiver vazio (''), retorne livros diretamente.
  //  4. Caso contrário, filtre com livros.filter(), mantendo
  //     apenas os livros cujo titulo OU autor contenha busca
  //     (use .toLowerCase().includes(busca) em ambos).
  //  5. Retorne a lista filtrada.
  // ----------------------------------------------------------
  readonly livrosFiltrados = computed(() => {
    // TODO: implemente aqui
    return this.livroServico.livros();
  });

  // ----------------------------------------------------------
  // TODO 2 — aoBuscar(valor)
  //
  // Objetivo: atualizar o signal textoBusca com o texto
  // digitado pelo usuário no campo de busca.
  //
  // Passos:
  //  1. Chame this.textoBusca.set(valor).
  // ----------------------------------------------------------
  aoBuscar(valor: string): void {
    // TODO: implemente aqui
  }

  // ----------------------------------------------------------
  // TODO 3 — abrirDialogoNovoLivro()
  //
  // Objetivo: abrir o modal de cadastro de livro.
  //
  // Passos:
  //  1. Chame this.dialogo.open(LivroDialogComponente, {...})
  //     passando as seguintes opções:
  //     - width: '560px'
  //     - maxWidth: '95vw'
  //     - disableClose: false
  //     - autoFocus: true
  // ----------------------------------------------------------
  abrirDialogoNovoLivro(): void {
    // TODO: implemente aqui
  }

  // ----------------------------------------------------------
  // TODO 4 — removerLivro(livro)
  //
  // Objetivo: remover o livro recebido chamando o serviço.
  //
  // Passos:
  //  1. Chame this.livroServico.removerLivro() passando
  //     livro.codigo como argumento.
  // ----------------------------------------------------------
  removerLivro(livro: Livro): void {
    // TODO: implemente aqui
  }
}
