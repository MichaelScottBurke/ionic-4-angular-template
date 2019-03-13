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
  { path: 'modal-layout', loadChildren: './modal-layout/modal-layout.module#ModalLayoutPageModule' },
  { path: 'form-grid-example', loadChildren: './examples/form-grid-example/form-grid-example.module#FormGridExamplePageModule' },
  { path: 'detail-view', loadChildren: './examples/detail-view/detail-view.module#DetailViewPageModule' },
  { path: 'detail-view-example', loadChildren: './examples/detail-view-example/detail-view-example.module#DetailViewExamplePageModule' },
  { path: 'form-example-two', loadChildren: './examples/form-example-two/form-example-two.module#FormExampleTwoPageModule' },
  { path: 'list-example', loadChildren: './examples/list-example/list-example.module#ListExamplePageModule' },
  { path: 'hub-layout-example', loadChildren: './examples/hub-layout-example/hub-layout-example.module#HubLayoutExamplePageModule' },
  { path: 'app-bar-top-example', loadChildren: './examples/app-bar-top-example/app-bar-top-example.module#AppBarTopExamplePageModule' },
  { path: 'top-app-bar-example2', loadChildren: './examples/top-app-bar-example2/top-app-bar-example2.module#TopAppBarExample2PageModule' },
  { path: 'top-app-bar-example3', loadChildren: './examples/top-app-bar-example3/top-app-bar-example3.module#TopAppBarExample3PageModule' },
  { path: 'app-bars', loadChildren: './app-bars/app-bars.module#AppBarsPageModule' },
  { path: 'app-bar-example-menu', loadChildren: './examples/app-bar-example-menu/app-bar-example-menu.module#AppBarExampleMenuPageModule' },
  { path: 'app-bar-example-back', loadChildren: './examples/app-bar-example-back/app-bar-example-back.module#AppBarExampleBackPageModule' },
  { path: 'app-bar-example-close', loadChildren: './examples/app-bar-example-close/app-bar-example-close.module#AppBarExampleClosePageModule' },
  { path: 'app-bar-example-subtitle', loadChildren: './examples/app-bar-example-subtitle/app-bar-example-subtitle.module#AppBarExampleSubtitlePageModule' },
  { path: 'app-bar-example-avatar', loadChildren: './examples/app-bar-example-avatar/app-bar-example-avatar.module#AppBarExampleAvatarPageModule' },
  { path: 'app-bar-example-tab', loadChildren: './examples/app-bar-example-tab/app-bar-example-tab.module#AppBarExampleTabPageModule' },
  { path: 'app-bar-example-tabfixed', loadChildren: './examples/app-bar-example-tabfixed/app-bar-example-tabfixed.module#AppBarExampleTabfixedPageModule' },
  { path: 'app-bar-example-tabsubtitle', loadChildren: './examples/app-bar-example-tabsubtitle/app-bar-example-tabsubtitle.module#AppBarExampleTabsubtitlePageModule' },
  { path: 'app-bar-example-tabavatar', loadChildren: './examples/app-bar-example-tabavatar/app-bar-example-tabavatar.module#AppBarExampleTabavatarPageModule' },
  { path: 'app-bar-example-avatarstart', loadChildren: './examples/app-bar-example-avatarstart/app-bar-example-avatarstart.module#AppBarExampleAvatarstartPageModule' },
  { path: 'card-example1', loadChildren: './examples/card-example1/card-example1.module#CardExample1PageModule' },
  { path: 'card-example2', loadChildren: './examples/card-example2/card-example2.module#CardExample2PageModule' },
  { path: 'card-example3', loadChildren: './examples/card-example3/card-example3.module#CardExample3PageModule' },
  { path: 'card-example4', loadChildren: './examples/card-example4/card-example4.module#CardExample4PageModule' },
  { path: 'card-example5', loadChildren: './example/card-example5/card-example5.module#CardExample5PageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
