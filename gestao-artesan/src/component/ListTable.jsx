import * as React from "react";
import PropTypes from "prop-types";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { styled } from '@mui/system';
function QuickSearchToolbar() {
    return (
        <>
            <GridToolbarContainer style={{
                display: "flex",
                alignItems: "flex-start",
                background: "#7B442A",
                color: "#7B442A",
                height: "45px",
            }}>
                <GridToolbarColumnsButton sx={{ color: "#FFFFFF", fontWeight: "regular", fontSize: "15px", fontFamily: "Montserrat" }} title={"Colunas"} />
                <GridToolbarFilterButton sx={{ color: "#FFFFFF", fontWeight: "regular", fontSize: "15px", fontFamily: "Montserrat" }} title={"Filtros"} />
                <GridToolbarDensitySelector sx={{ color: "#FFFFFF", fontWeight: "regular", fontSize: "15px", fontFamily: "Montserrat" }} title={"Densidade"} />
                <GridToolbarExport sx={{ color: "#FFFFFF", fontWeight: "regular", fontSize: "15px", fontFamily: "Montserrat" }} title={"Exportar"} />
            </GridToolbarContainer>
        </>
    );
}


QuickSearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

const Grid = styled("div")(({ theme }) => ({
    "& .MuiDataGrid-columnsContainer": {
        backgroundColor: "rgba(154, 192, 216, 0.1)"
    },
    "& .MuiDataGrid-renderingZone": {
        "& .MuiDataGrid-row": {
            "&:nth-child(2n)": { backgroundColor: "rgba(154, 192, 216, 0.1)" }
        }
    },
}));

const settings = {
    // Root
    noRowsLabel: 'Sem linhas',
    noResultsOverlayLabel: 'Nenhum resultado encontrado.',
    errorOverlayDefaultLabel: 'Um erro ocorreu.',

    // Density selector toolbar button text
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compactar',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',

    // Columns selector toolbar button text
    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Selecione as colunas',

    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar como CSV',
    toolbarExportPrint: 'Imprimir',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Localizar coluna',
    columnsPanelTextFieldPlaceholder: 'Título da coluna',
    columnsPanelDragIconLabel: 'Reordenar coluna',
    columnsPanelShowAllButton: 'Mostre tudo',
    columnsPanelHideAllButton: 'Esconda tudo',

    // Filter panel text
    filterPanelAddFilter: 'Adicionar filtro',
    filterPanelDeleteIconLabel: 'Excluir',
    filterPanelOperators: 'Operadores',
    filterPanelOperatorAnd: 'E',
    filterPanelOperatorOr: 'OU',
    filterPanelColumns: 'Colunas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Valor do filtro',

    // Filter operators text
    filterOperatorContains: 'contém',
    filterOperatorEquals: 'é igual a',
    filterOperatorStartsWith: 'começa com',
    filterOperatorEndsWith: 'termina com',
    filterOperatorIs: 'é',
    filterOperatorNot: 'não é',
    filterOperatorAfter: 'é depois',
    filterOperatorOnOrAfter: 'é em ou depois',
    filterOperatorBefore: 'é antes',
    filterOperatorOnOrBefore: 'está em ou antes',
    filterOperatorIsEmpty: 'está vazia',
    filterOperatorIsNotEmpty: 'não está vazio',

    // Filter values text
    filterValueAny: 'algum',
    filterValueTrue: 'verdade',
    filterValueFalse: 'falso',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Mostrar colunas',
    columnMenuFilter: 'Filtro',
    columnMenuHideColumn: 'Esconder',
    columnMenuUnsort: 'Não ordenar',
    columnMenuSortAsc: 'Classificar por ASC',
    columnMenuSortDesc: 'Classificar por DESC',

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
        count !== 1 ? `${count} filtros ativos` : `${count} filtro ativos`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Rows selected footer text
    footerRowSelected: (count) =>
        count !== 1
            ? `${count.toLocaleString()} linhas selecionadas`
            : `${count.toLocaleString()} linha selecionada`,

    // Total rows footer text
    footerTotalRows: 'Total de linhas:',

    // Total visible rows footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox',

    // Boolean cell text
    booleanCellTrueLabel: 'true',
    booleanCellFalseLabel: 'false',

    // Actions cell more text
    actionsCellMore: 'more',

    // Used core components translation keys
    MuiTablePagination: {},
};

export default function ListTable(props) {

    const columns = props.columns;
    const initialRows = props.initialRows;
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [pageSize, setPageSize] = React.useState(5);

    return (
        <>
            <Grid>
                <br />
                <DataGrid
                    localeText={{ ...settings }}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20, { label: 'Todos', value: initialRows.length }]}
                    rowCount={initialRows.length}
                    autoHeight
                    style={{ color: "#7B442A", border: "3px solid transparent", fontSize: "15px", fontFamily: "Montserrat" }}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}

                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={selectionModel}
                    components={{
                        Toolbar: QuickSearchToolbar,
                    }}
                    rows={initialRows}
                    columns={columns}
                />
            </Grid>

        </>

    );
}
