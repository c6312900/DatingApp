import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {

  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty) {
      return confirm('確定要繼續?未存檔資料將會遺失');
    }
    return true;
  }
}
