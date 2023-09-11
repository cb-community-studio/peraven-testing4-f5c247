
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';


const NumberDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.numText}</p>
    const badgeTemplate1 = (rowData, { rowIndex }) => <Badge value={rowData.numInput}  ></Badge>
    const badgeTemplate2 = (rowData, { rowIndex }) => <Badge value={rowData.numBadge}  ></Badge>
    const knobTemplate3 = (rowData, { rowIndex }) => <Knob value={rowData.numKnob}  />
    const ratingTemplate4 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.numRating} cancel={false}  />
    const sliderTemplate5 = (rowData, { rowIndex }) => <Slider value={rowData.numSlider} style={{width:"20rem"}}  />
    const progressBarTemplate6 = (rowData, { rowIndex }) => <ProgressBar value={rowData.numProgBar} style={{width:"20rem"}}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="numText" header="Num Text" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="numInput" header="Num Input" body={badgeTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="numBadge" header="Num Badge" body={badgeTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="numKnob" header="Num Knob" body={knobTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="numRating" header="Num Rating" body={ratingTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="numSlider" header="Num Slider" body={sliderTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="numProgBar" header="Num ProgressBar" body={progressBarTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default NumberDataTable;