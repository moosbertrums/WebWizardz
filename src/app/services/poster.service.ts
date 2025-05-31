import {Injectable, signal} from '@angular/core';
import {PosterRow} from '../models/poster';
import {PosterField} from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  private _rows = signal<PosterRow[]>([]);
  public readonly rows = this._rows.asReadonly();

  constructor() {
    this._rows.set([
      {
        id: crypto.randomUUID(),
        fields: [],
      },
    ]);
  }

  addField(field: PosterField, rowId: string, index?: number) {
    const rows = this._rows();
    const newRows = rows.map(row => {
      if (row.id === rowId) {
        const updatedFields = [...row.fields];
        if (index !== undefined) {
          updatedFields.splice(index, 0, field);
        } else {
          updatedFields.push(field);
        }
        return { ...row, fields: updatedFields };
      }
      return row;
    });

    this._rows.set(newRows);
  }

  deleteField(fieldId: string) {
    const rows = this._rows();
    const newRows = rows.map(row => ({
      ...row,
      fields: row.fields.filter(f => f.id !== fieldId)
    }));

    this._rows.set(newRows);
  }
}
