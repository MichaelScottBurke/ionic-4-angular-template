import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'lists', loadChildren: './lists/lists.module#ListsPageModule' },
  { path: 'grids', loadChildren: './grids/grids.module#GridsPageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'dialogs', loadChildren: './dialogs/dialogs.module#DialogsPageModule' },
  { path: 'snackbars', loadChildren: './snackbars/snackbars.module#SnackbarsPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'typography', loadChildren: './typography/typography.module#TypographyPageModule' },
  { path: 'color', loadChildren: './color/color.module#ColorPageModule' },
  { path: 'iconography', loadChildren: './iconography/iconography.module#IconographyPageModule' },
  { path: 'buttons-fabs', loadChildren: './buttons-fabs/buttons-fabs.module#ButtonsFabsPageModule' },
  { path: 'chips', loadChildren: './chips/chips.module#ChipsPageModule' },
  { path: 'date-pickers', loadChildren: './date-pickers/date-pickers.module#DatePickersPageModule' },
  { path: 'menus', loadChildren: './menus/menus.module#MenusPageModule' },
  { path: 'progress-indicators', loadChildren: './progress-indicators/progress-indicators.module#ProgressIndicatorsPageModule' },
  { path: 'radio-buttons', loadChildren: './radio-buttons/radio-buttons.module#RadioButtonsPageModule' },
  { path: 'checkboxes', loadChildren: './checkboxes/checkboxes.module#CheckboxesPageModule' },
  { path: 'switches', loadChildren: './switches/switches.module#SwitchesPageModule' },
  { path: 'sliders', loadChildren: './sliders/sliders.module#SlidersPageModule' },
  { path: 'steppers', loadChildren: './steppers/steppers.module#SteppersPageModule' },
  { path: 'bottom-navigation', loadChildren: './bottom-navigation/bottom-navigation.module#BottomNavigationPageModule' },
  { path: 'text-fields', loadChildren: './text-fields/text-fields.module#TextFieldsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'toolbars', loadChildren: './toolbars/toolbars.module#ToolbarsPageModule' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsPageModule' },
  { path: 'fab-example', loadChildren: './examples/fab-example/fab-example.module#FabExamplePageModule' },
  { path: 'form-example', loadChildren: './examples/form-example/form-example.module#FormExamplePageModule' },
  { path: 'card-over', loadChildren: './card-over/card-over.module#CardOverPageModule' },
  { path: 'detail-view', loadChildren: './detail-view/detail-view.module#DetailViewPageModule' },
  { path: 'list-detail', loadChildren: './list-detail/list-detail.module#ListDetailPageModule' },
  { path: 'hub', loadChildren: './hub/hub.module#HubPageModule' },
  { path: 'card-over-example', loadChildren: './examples/card-over-example/card-over-example.module#CardOverExamplePageModule' },
  { path: 'modal-example', loadChildren: './examples/modal-example/modal-example.module#ModalExamplePageModule' },
  { path: 'modal-layout', loadChildren: './modal-layout/modal-layout.module#ModalLayoutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
