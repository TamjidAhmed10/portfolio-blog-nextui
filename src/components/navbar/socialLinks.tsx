import { Link } from "@nextui-org/link"
import {  GithubIcon, TwitterIcon } from "../icons"

const SocialLinks = ({siteConfig}:any) =>{
    return (<>
    <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
    </>)
}
export default SocialLinks