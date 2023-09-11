import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";




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

const NumberCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            numText: _entity.numText,
            numInput: _entity.numInput,
            numBadge: _entity.numBadge,
            numKnob: _entity.numKnob,
            numRating: _entity.numRating,
            numSlider: _entity.numSlider,
            numProgBar: _entity.numProgBar,
        };

        setLoading(true);
        try {
            const result = await client.service("number").create(_data);
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
            <div role="number-create-dialog-component">
            <div>
                <p className="m-0">Num Text:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numText} onChange={(e) => setValByKey("numText", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num Input:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numInput} onChange={(e) => setValByKey("numInput", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num Badge:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numBadge} onChange={(e) => setValByKey("numBadge", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num Knob:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numKnob} onChange={(e) => setValByKey("numKnob", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num Rating:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numRating} onChange={(e) => setValByKey("numRating", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num Slider:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numSlider} onChange={(e) => setValByKey("numSlider", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Num ProgressBar:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.numProgBar} onChange={(e) => setValByKey("numProgBar", e.target.value)}  />
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

export default connect(null, mapDispatch)(NumberCreateDialogComponent);
