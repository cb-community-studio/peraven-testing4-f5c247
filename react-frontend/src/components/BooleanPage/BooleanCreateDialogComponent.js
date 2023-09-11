import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Checkbox } from 'primereact/checkbox';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const BooleanCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            boolText: _entity.boolText,
            boolTick: _entity.boolTick,
            boolCheckBox: _entity.boolCheckBox,
            boolSwitch: _entity.boolSwitch,
        };

        setLoading(true);
        try {
            const result = await client.service("boolean").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="boolean-create-dialog-component">
            <div>
                <p className="m-0">Text Bool:</p>
                <Checkbox checked={_entity?.boolText} onChange={ (e) => setValByKey("boolText", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Tick Bool:</p>
                <Checkbox checked={_entity?.boolTick} onChange={ (e) => setValByKey("boolTick", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">CheckBox Bool:</p>
                <Checkbox checked={_entity?.boolCheckBox} onChange={ (e) => setValByKey("boolCheckBox", e.checked)}  ></Checkbox>
            </div>
            <div>
                <p className="m-0">Switch Bool:</p>
                <Checkbox checked={_entity?.boolSwitch} onChange={ (e) => setValByKey("boolSwitch", e.checked)}  ></Checkbox>
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(BooleanCreateDialogComponent);
