import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string
    image: string
    // slug: string
    // location: string
    // date: string
    // time: string
    // either needed the ai or just tedious work
}

const EventCard = ({ title, image }: Props) => {
    return (
        <Link href={`/events`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className="poster"/>

            {/* Other attributes from the commented-out Props here */}

            <p className="title">{title}</p>
        </Link>
    )
}

export default EventCard
