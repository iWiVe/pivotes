import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PivotViewComponent } from '@syncfusion/ej2-angular-pivotview';

import { dataPivot, dt } from './dataSource';
import { localization } from './localization-Es';
import { setCulture, L10n } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-pivotes',
  templateUrl: './pivotes.component.html',
  styleUrls: ['./pivotes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PivotesComponent implements OnInit {
  
 
  public pivoteSeleccionada: number;


  // PIVOTE DEVEXPRESS
  public pivotGridDataSource;

  //PIVOTE FLEXMONSTER
  public report;

  // PIVOTE SYNFUSION
  public pivotData: IDataSet[];
  public dataSourceSettings: IDataOptions;
  public aggregateTypes: any[];

  @ViewChild('pivotview', {static: false})
  public pivotVC: PivotView;

  constructor() { 
  }

  ngOnInit(): void {
    this.changePivot(this.pivotes.DEVEXPRESS);

  }


  changePivot(pivot: number) {
    this.pivoteSeleccionada = pivot;
    this.changeConfiguration(this.pivoteSeleccionada);
  }

  changeConfiguration(pivot: number){
    if( pivot === this.pivotes.DEVEXPRESS){
      // configuracion para devexpress
      this.pivotGridDataSource = {
        fields: [{dataField: 'ventas', summaryType: 'sum'}],
        store: dt,
      };
    } else if(pivot === this.pivotes.FLEXMONSTER) {
      this.report = {
        dataSource: {
          data: dt
        },
        options: {
          showCalculatedValuesButton: false
        },
        slice: {
          expands: {
            expandAll: true,
          }
        },
        localization: localization

      }
    } else if(pivot === this.pivotes.SYNFUSION) {
      this.obtenerTraduccionPivot();
      this.aggregateTypes = ['Sum', 'Min',  'Max', 'DistinctCount', 'Avg', 'Count'];
      this.dataSourceSettings = {
        dataSource: dt,
        expandAll: true,
        enableSorting: true,
      };
    }
  }

  createToolBar(args){
    let tabs = args.getTabs();
    args.getTabs = () => {
     let filterTabs = tabs.filter((tab) => {
      let tabsRequired = ['fm-tab-fields', 'fm-tab-export', 'fm-tab-fullscreen'];
        if(tabsRequired.includes(tab.id)) {
          tab.rightGroup = true;
          return tab;
        }
      });

       return filterTabs;
    }
  }

  exportPivot() {
    this.pivotVC.excelExport();
  }


  obtenerTraduccionPivot() {

    setCulture('es-ES');

    L10n.load({
      'es-ES': {
        pivotview: {
          grandTotal: 'Gran Total',
          total: 'Total',
          value: 'Valor',
          noValue: 'No Valor',
          row: 'Fila',
          column: 'Columna',
          collapse: 'Colapsar',
          expand: 'Expandir',
          rowAxisPrompt: 'Arrastre fila aquí',
          columnAxisPrompt: 'Arrastre columna aquí',
          valueAxisPrompt: 'Arrastre valor aquí',
          filterAxisPrompt: 'Arrastre filtro aquí',
          emptyData: 'No se encontraron registros',
          Sum: 'Suma',
          Avg: 'Promedio',
          Count: 'Contar',
          Min: 'Mínimo',
          Max: 'Máximo',
          DistinctCount: 'Distintos',
          Product: 'Producto',
          sort: 'Ordernar',
          filter: 'Filtrar',
          remove: 'Remover',
          format: 'Agregación de valores por',
          all: 'Todos',
          search: 'Buscar',
          ok: 'Listo',
          of: 'de'
        },
        pivotfieldlist: {
          fieldList: 'Lista de campos',
          dropRowPrompt: 'Arrastre fila',
          dropColPrompt: 'Arrastre columna',
          dropValPrompt: 'Arrastre valor',
          dropFilterPrompt: 'Arrastre filtro',
          addPrompt: 'Agregar campo',
          // 'centerHeader': 'Ziehen Sie die Felder zwischen den Bereichen unten:',
          add: 'Agregar',
          drag: 'Arrastrar',
          filters: 'Filtros',
          rows: 'Filas',
          columns: 'Columnas',
          values: 'Valores',
          error: 'Error',
          // 'dropAction': 'Berechnetes Feld nicht in jeder anderen Region außer Wert Achse sein.',
          sort: 'Ordernar',
          filter: 'Filtrar',
          search: 'Buscar',
          close: 'Cerrar',
          cancel: 'Cancelar',
          delete: 'Eliminar',
          alert: 'Alerta',
          warning: 'Precaución',
          ok: 'Listo',
          allFields: 'Todos los campos',
          noMatches: 'No existen coincidencias',
          Sum: 'Suma',
          Avg: 'Promedio',
          Count: 'Contar',
          Min: 'Mínimo',
          Max: 'Máximo',
          DistinctCount: 'Distintos',
          Product: 'Producto',
          sortNone: 'Ordenar campos',
          sortAscending: 'Ordenar ascendentemente',
          sortDescending: 'Ordenar descendentemente',
          format: 'Agregación de valores por',
          all: 'Todos',
          of: 'de'
        }
      }
  });
  }


   get pivotes() { return Pivotes; }
}

export enum Pivotes {
  DEVEXPRESS = 0,
  FLEXMONSTER = 1,
  SYNFUSION = 2
}

