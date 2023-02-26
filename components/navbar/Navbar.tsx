import Image from "next/image"
import styles from '../../styles/components/navbar/Navbar.module.css'
import Link from 'next/link'
import { Flex, Box } from "@chakra-ui/react"
type navType = {

    extraStyle?:
    {
        backgroundColor: string,
    },

}
const Navbar = (props: navType) => {
    return (
        <div style={props.extraStyle}>
            <Flex justifyContent='space-around' gap='400px' mt='20px' fontSize='20px' fontWeight='bold'>
                <Box> <Link href='/'>
                    <Image className={styles.img1}
                        src="/logo.png"
                        alt='nav bar vali image'
                        height={100}
                        width={100}
                    />
                </Link></Box>
                <Box>
                    <Flex gap='50px'>
                        <Flex gap='30px' >
                            <Link href='/'>HOME</Link>
                            <Link href='/events'>EVENTS</Link>
                        </Flex>
                        <Flex gap='30px' color='purple'>
                            <Link  href='/login'>LOGIN</Link>
                            <Link href='/signup'>SIGN UP</Link>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>

        </div>
    )
}
export default Navbar