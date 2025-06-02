import {Component, computed, inject} from '@angular/core';
import {PosterService} from '../../services/poster.service';
import {FieldTypesService} from '../../services/field-types.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-poster-settings',
  imports: [MatFormFieldModule, MatInput, FormsModule, MatSelectModule, MatCheckboxModule],
  template: `
    <p class="p-4 bg-white rounded-lg h-[calc(100vh-150px)] overflow-y-auto border-gray-200 shadow-sm">
      @if (posterService.selectedField(); as selectedField) {
        <h3 class="text-xl font-medium mb-6">Field Properties</h3>
        <div class="flex flex-col gap-6">
          @for (setting of fieldSettings(); track setting.key) {
            @switch (setting.type) {
              @case ('text') {
                <mat-form-field class="w-full">
                  <mat-label>{{ setting.label }}</mat-label>
                  <input
                    matInput
                    [ngModel]="fieldValues()[setting.key]"
                    (ngModelChange)="updateField(selectedField.id, setting.key, $event)"
                  />
                </mat-form-field>
              }
              @case ('checkbox') {
                <div class="flex items-center">
                  <mat-checkbox
                    [ngModel]="fieldValues()[setting.key]"
                    (ngModelChange)="updateField(selectedField.id, setting.key, $event)"
                  >
                    {{ setting.label }}
                  </mat-checkbox>
                </div>
              }
              @case ('select') {
                <mat-form-field class="w-full">
                  <mat-label>{{ setting.label }}</mat-label>
                  <mat-select
                    [ngModel]="fieldValues()[setting.key]"
                    (ngModelChange)="updateField(selectedField.id, setting.key, $event)"
                  >
                    @for (option of setting.options || []; track option.value) {
                      <mat-option [value]="option.value">
                        {{ option.label }}
                      </mat-option>
                    }
                  </mat-select>
                </mat-form-field>
              }
            }
          }
        </div>
      }
    </p>
  `,
  styles: ``
})
export class PosterSettingsComponent {
  posterService = inject(PosterService);
  fieldTypesService = inject(FieldTypesService);

  fieldSettings = computed(() => {
    const field = this.posterService.selectedField();
    if (!field) return [];

    const fieldDef = this.fieldTypesService.getFieldType(field.type);
    return fieldDef?.settingsConfig || [];
  });

  fieldValues = computed(() => {
    const field = this.posterService.selectedField();
    if (!field) return {};
    return field as any;
  });

  updateField(fieldId: string, key: string, value: any) {
    this.posterService.updateField(fieldId, { [key]: value });
  }

}
