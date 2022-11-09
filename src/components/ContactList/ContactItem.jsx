import { Button } from '../ContactForm/ContactForm.styled';
import { Span, Text } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({id, name, number, onDeleteTransit}) => {

    const onDelete = () => {
        onDeleteTransit(id)
    };

    return <Text>{name}: <Span>{number}</Span><Button onClick={onDelete}>Delete</Button></Text>
};


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteTransit: PropTypes.func,
};