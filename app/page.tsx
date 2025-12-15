import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants"

const Page = () => {
    return (
        <section>
            <h1 className="text-center">The Hub For Every Dev <br />Events You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups and Conferences All In One Place</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <div className="events">
                    {events.map((event) => (
                        <div key={event.title}>
                            <EventCard {...event} />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
export default Page
