import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => {
        return (
          <ListGroupItem
            key={type.id}
            onClick={() => {
              device.setSelectedType(type);
            }}
            active={type.id === device.selectedType.id}
            style={{ cursor: 'pointer' }}>
            {type.name}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
});

export default TypeBar;
