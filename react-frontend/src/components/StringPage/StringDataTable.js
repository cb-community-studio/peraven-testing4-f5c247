
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { Avatar } from 'primereact/avatar';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';


const StringDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.itemText}</p>
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.itemInput}  />
    const iconTemplate2 = (rowData, { rowIndex }) => <i className={"pi " + rowData.itemIcon}  ></i>
    const imageTemplate3 = (rowData, { rowIndex }) => <Image src={rowData.itemImage}  alt="Image" height="60px" />
    const avatarTemplate4 = (rowData, { rowIndex }) => <Avatar image={rowData.itemAvatar}  />
    const chipTemplate5 = (rowData, { rowIndex }) => <Chip label={rowData.itemChip}  />
    const tagTemplate6 = (rowData, { rowIndex }) => <Tag value={rowData.itemTag}  ></Tag>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="itemText" header="Text" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="itemInput" header="Input" body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="itemIcon" header="Icon" body={iconTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="itemImage" header="Image" body={imageTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="itemAvatar" header="Avatar" body={avatarTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="itemChip" header="Chip" body={chipTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="itemTag" header="Tag" body={tagTemplate6} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default StringDataTable;