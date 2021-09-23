import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useUpdateTrec from "../../hooks/pirmoVaikoLankomumoHooks/1VaikoTrec";
import useGetVaikoLankomuma from "../../hooks/pirmoVaikoLankomumoHooks/getVaikoLankomuma";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
const Pirmo_VaikoLankomumoTrec = () => {
  const { status, data, isFetching, error } = useGetVaikoLankomuma();
  //   console.log(data)
  const { mutate } = useUpdateTrec();
  const queryClient = useQueryClient();

  const toggle = async (Pirm_Trecadienis, userId) => {
    await mutate(userId);
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
    await queryClient.invalidateQueries("Lankomumas");
  };
  return (
    <div>
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error:</span>
      ) : (
        data.vaikoDuom.map((lankomumas,i) => {
          // console.log(lankomumas);
          return (
            <div key={i}>
            <h6  className="text-center">Treč</h6>
            <BootstrapSwitchButton
                size="xs"
                id={lankomumas.userId}
                checked={lankomumas.Pirm_Treciadienis}
                onlabel="O"
                offlabel="I"
                onstyle="outline-success"
                onChange={() =>
                    toggle(lankomumas.Pirm_Treciadienis, lankomumas.userId)
                  }
              >
              </BootstrapSwitchButton>
            </div>
          );
        })
      )}
      {/* <BootstrapSwitchButton
        checked={true}
        onstyle="outline-success"
        offstyle="outline-danger"
        size="xs"
      /> */}
      {/* <Form.Check
                        type="switch"
                        id={vaikas.userId}
                        defaultChecked={vaikas.AdminConfirm}
                        onClick={() =>
                          toggle(vaikas.AdminConfirm, vaikas.userId)
                        }
                      /> */}
    </div>
  );
};

export default Pirmo_VaikoLankomumoTrec;
