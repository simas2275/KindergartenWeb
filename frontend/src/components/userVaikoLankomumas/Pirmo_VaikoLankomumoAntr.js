import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import useUpdatePirmd from "../../hooks/pirmoVaikoLankomumoHooks/1VaikoAntr";
import useGetVaikoLankomuma from "../../hooks/pirmoVaikoLankomumoHooks/getVaikoLankomuma";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
const Pirmo_VaikoLankomumoAntr = () => {
  const { status, data, isFetching, error } = useGetVaikoLankomuma();
  //   console.log(data)
  const { mutate } = useUpdatePirmd();
  const queryClient = useQueryClient();

  const toggle = async (Pirm_Antradienis, userId) => {
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
            <h6  className="text-center">Antr</h6>
              <BootstrapSwitchButton
                size="xs"
                id={lankomumas.userId}
                checked={lankomumas.Pirm_Antradienis}
                onlabel="O"
                offlabel="I"
                onstyle="outline-success"
                onChange={() =>
                    toggle(lankomumas.Pirm_Antradienis, lankomumas.userId)
                  }
              >
                  
                {/* <Form.Check
                  type="switch"
                  size="xs"
                  id={lankomumas.userId}
                  defaultChecked={lankomumas.Pirm_Pirmadienis}
                  onClick={() =>
                    toggle(lankomumas.Pirm_Pirmadienis, lankomumas.userId)
                  }
                /> */}
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

export default Pirmo_VaikoLankomumoAntr;
