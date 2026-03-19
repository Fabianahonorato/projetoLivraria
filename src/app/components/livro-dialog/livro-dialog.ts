// ============================================================
// EXERCÍCIO: LivroDialogComponente
//
// Implemente os itens marcados com TODO abaixo.
// Este componente exibe um modal com um formulário reativo
// para cadastrar um novo livro.
// ============================================================

import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LivroService } from '../../core/services/livro';

// ----------------------------------------------------------
// TODO 1 — validadorInteiro(controle)
//
// Objetivo: validador personalizado que verifica se o valor
// digitado é um número inteiro (sem casas decimais).
//
// Passos:
//  1. Leia controle.value.
//  2. Se o valor for null, '' ou undefined, retorne null
//     (campo vazio não deve ser bloqueado por este validador).
//  3. Use Number.isInteger(Number(valor)) para testar.
//  4. Retorne null se for inteiro válido, ou o objeto
//     { naoInteiro: true } caso contrário.
// ----------------------------------------------------------
function validadorInteiro(controle: AbstractControl): ValidationErrors | null {
  // TODO: implemente aqui
  return null;
}

@Component({
  selector: 'app-livro-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './livro-dialog.html',
  styleUrl: './livro-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LivroDialogComponente {

  private readonly construtorFormulario = inject(FormBuilder);
  private readonly livroServico = inject(LivroService);
  private readonly referenciaDialogo = inject(MatDialogRef<LivroDialogComponente>);
  private readonly barraNotificacao = inject(MatSnackBar);

  readonly anoAtual = new Date().getFullYear();
  readonly tamanhoMaximoDescricao = 500;

  // ----------------------------------------------------------
  // TODO 2 — formulario
  //
  // Objetivo: criar o FormGroup com os campos do livro e suas
  // validações usando this.construtorFormulario.group({...}).
  //
  // Campos e regras:
  //  - codigo:    desabilitado, valor inicial = this.livroServico.gerarCodigo()
  //  - titulo:    obrigatório, mínimo 2 caracteres
  //  - autor:     obrigatório
  //  - descricao: opcional, máximo de this.tamanhoMaximoDescricao caracteres
  //  - ano:       obrigatório, mín. 1450, máx. this.anoAtual, validadorInteiro
  //  - paginas:   obrigatório, mín. 1, validadorInteiro
  // ----------------------------------------------------------
  readonly formulario: FormGroup = this.construtorFormulario.group({
    // TODO: defina os campos acima com suas validações
  });

  // ----------------------------------------------------------
  // TODO 3 — tamanhoDescricao (getter)
  //
  // Objetivo: retornar a quantidade de caracteres digitados
  // no campo "descricao" para exibir o contador no template.
  //
  // Dica: use this.formulario?.get('descricao')?.value?.length
  //       com o operador de coalescência nula (??) para
  //       retornar 0 quando o valor for null/undefined.
  // ----------------------------------------------------------
  get tamanhoDescricao(): number {
    // TODO: implemente aqui
    return 0;
  }

  // ----------------------------------------------------------
  // TODO 4 — obterErro(campo)
  //
  // Objetivo: retornar a mensagem de erro adequada para o
  // campo informado, a ser exibida no template.
  //
  // Passos:
  //  1. Obtenha o controle: this.formulario.get(campo).
  //  2. Se não existir, não estiver tocado ou não tiver erros,
  //     retorne '' (string vazia).
  //  3. Verifique os erros na seguinte ordem e retorne a
  //     mensagem correspondente:
  //     - 'required'   → 'Campo obrigatório.'
  //     - 'minlength'  → `Mínimo de X caracteres.`
  //                       (X = erros['minlength'].requiredLength)
  //     - 'maxlength'  → `Máximo de X caracteres.`
  //                       (X = erros['maxlength'].requiredLength)
  //     - 'min'        → `Valor mínimo: X.`  (X = erros['min'].min)
  //     - 'max'        → `Valor máximo: X.`  (X = erros['max'].max)
  //     - 'naoInteiro' → 'Informe um número inteiro.'
  //  4. Como fallback, retorne 'Valor inválido.'
  // ----------------------------------------------------------
  obterErro(campo: string): string {
    // TODO: implemente aqui
    return '';
  }

  // ----------------------------------------------------------
  // TODO 5 — salvar()
  //
  // Objetivo: validar o formulário e, se válido, cadastrar o
  // livro e fechar o modal com sucesso.
  //
  // Passos:
  //  1. Se this.formulario.invalid, chame markAllAsTouched()
  //     para exibir todos os erros e encerre com return.
  //  2. Leia os dados com this.formulario.getRawValue()
  //     (getRawValue inclui campos desabilitados como o código).
  //  3. Chame this.livroServico.adicionarLivro({...}) montando
  //     o objeto Livro com os dados lidos:
  //     - titulo e autor devem ter .trim() aplicado.
  //     - descricao: dados.descricao?.trim() ?? ''
  //     - ano e paginas devem ser convertidos com Number().
  //  4. Exiba uma notificação com this.barraNotificacao.open():
  //     - Mensagem: 'Livro cadastrado com sucesso!'
  //     - Botão de ação: 'Fechar'
  //     - Opções: duration 3500ms, position end/bottom.
  //  5. Feche o modal com this.referenciaDialogo.close(true).
  // ----------------------------------------------------------
  salvar(): void {
    // TODO: implemente aqui
  }

  // ----------------------------------------------------------
  // TODO 6 — cancelar()
  //
  // Objetivo: fechar o modal sem salvar nenhum dado.
  //
  // Passos:
  //  1. Chame this.referenciaDialogo.close(false).
  // ----------------------------------------------------------
  cancelar(): void {
    // TODO: implemente aqui
  }
}
