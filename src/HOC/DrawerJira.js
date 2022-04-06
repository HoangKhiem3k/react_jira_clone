import React from 'react'
import { Drawer, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_DRAWER} from '../util/constants/settingSystem';


export default function DrawerJira(props) {



    const { visible, ComponentContentDrawer,callBackSubmit,title } = useSelector(state => state.DrawerReducer);

    const dispatch = useDispatch();

    console.log('visible', visible)


    // const showDrawer = () => {
    //     dispatch({ type: OPEN_DRAWER });
    // };

    const onClose = () => {
        dispatch({ type: CLOSE_DRAWER });

    };
    return (
        <>
            {/* <button onClick={showDrawer}>showdrawer</button> */}
            <Drawer
                title={title}
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}

                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={callBackSubmit} type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                {/* Nội dung thay đổi của drawer */}
                {ComponentContentDrawer}
     
            </Drawer>
        </>
    )
}