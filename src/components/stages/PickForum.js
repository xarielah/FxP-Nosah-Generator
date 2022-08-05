import { Box, Select } from '@chakra-ui/react';
import forums from '../../data/forums';

const PickForum = ({ setter, inc }) => {
    const onchange = (value) => {
        const id = parseInt(value);
        const forum = forums.filter((item) => item.id === id)[0];
        setter(forum);
        inc();
    };

    return (
        <Box>
            <Select onChange={(e) => onchange(e.target.value)}>
                <option value={0}>בחר פורום מהרשימה</option>
                {forums.map((forum, index) => (
                    <option key={index} value={forum.id}>
                        {forum.name}
                    </option>
                ))}
            </Select>
        </Box>
    );
};

export default PickForum;
