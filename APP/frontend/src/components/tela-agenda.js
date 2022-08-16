import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../css/tela-agenda.css';

const columns = [
  { field: 'titulo', headerName: 'Título', width: 200 },
  { field: 'data', headerName: 'Data e Hora', width: 300 },
  { field: 'local', headerName: 'Local', width: 200 },
];

const rows = [
  { id: 1, titulo: 'Coleta Feliz', data: '20/08/2022 10:00', local: 'Jardim do Baobá' },
  { id: 2, titulo: 'Coleta por Riachuelo', data: '03/09/2022 08:00', local: 'Palafitas do Pina' },
  { id: 3, titulo: 'Coleta Coletiva', data: '17/09/2022 09:00', local: 'Praça da Várzea' },
];

export default function DataTable() {
  return (
    <div className='table'  style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
    </div>
  );
}
