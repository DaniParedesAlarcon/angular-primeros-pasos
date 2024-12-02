import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: `./form.component.html`,
  styleUrl: './form.component.css',
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  saveCharacter(): void{
    console.log(this.character);
    if (this.character.name.length === 0) return;
    if (this.character.power < 0) return;

    this.onNewCharacter.emit({...this.character}); // Metiendolo entre llaves y con los ... hacemos que se copie el objeto y no sea una referencia directa, para evitar problemas en futuros cambios de variable sin que afecten a esta
    this.character.name = '';
    this.character.power = 0;
  }

}
