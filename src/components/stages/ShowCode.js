import { Flex, Textarea, Button, Text, Box } from '@chakra-ui/react';
import Notes from '../general/Notes';
import getBBCode from '../../data/getBBCode';
import { useState } from 'react';
import PreviewForum from './PreviewForum';
import PmUsers from './PmUsers';

const ShowCode = ({ weeklyUser, weeklyThread, forum }) => {
    const [isOpen, setOpen] = useState(true);
    const [copied, setCopied] = useState(false);
    const [showCodeStatus, setShowCodeStatus] = useState(
        weeklyThread.length || weeklyUser.length ? false : true,
    );

    const fullText = getBBCode(forum, weeklyUser, weeklyThread);
    const copyText = () => navigator.clipboard.writeText(fullText);

    const close = () => setOpen(false);

    return (
        <Flex justifyContent={'center'} flexDirection='column'>
            {isOpen && <Notes close={close} />}
            <PreviewForum forum={forum} />

            <Box align='center'>
                {(weeklyThread.length > 0 || weeklyUser.length > 0) && (
                    <PmUsers
                        weeklyUser={weeklyUser}
                        weeklyThread={weeklyThread}
                        setShowCodeStatus={(bool) => setShowCodeStatus(bool)}
                    />
                )}
            </Box>
            {!showCodeStatus ? (
                <Box
                    bg={'#333333'}
                    color='white'
                    textAlign={'center'}
                    p={5}
                    borderRadius='md'
                >
                    <Text>
                        עלייך לשלוח קודם ה"פ לזוכים ולאחר מכן הקוד יופיע כאן.{' '}
                        {':)'}
                    </Text>
                </Box>
            ) : (
                <>
                    <Button
                        mb={3}
                        size='sm'
                        colorScheme={'messenger'}
                        onClick={() => {
                            copyText();
                            setCopied(true);
                        }}
                    >
                        {copied ? 'הנוסח הועתק בהצלחה! ✔️' : 'העתק נוסח ללוח'}
                    </Button>
                    <Textarea rows={10} value={fullText} readOnly />
                    <Box align='center' mt={5}>
                        <Button
                            colorScheme='red'
                            size='sm'
                            onClick={() => (window.location.href = '/')}
                        >
                            אפס הכל
                        </Button>
                    </Box>
                </>
            )}
        </Flex>
    );
};

export default ShowCode;
