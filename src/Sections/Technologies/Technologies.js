import React from 'react'
import { Technology, Title } from '../../Components'
import { faAws, faBootstrap, faCloudflare, faCss3, faDocker, faFigma, faGit, faGithub, faHtml5, faJs, faLaravel, faNode, faPaypal, faPhp, faPython, faReact, faUbuntu, faWindows, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Technologies = () => {
  return (
    <section className="bg-slate-100 py-8">
		<Title
			name="التقنيات التي نستخدمها"
		/>
		<div className="py-4 mt-4">
			<div className="container mx-auto px-6 grid grid-cols-5 gap-4 border-1 border-white">
				<Technology
					icon={faReact}
				/>
				<Technology
					icon={faNode}
				/>
				<Technology
					icon={faBootstrap}
				/>
				<Technology
					icon={faCss3}
				/>
				<Technology
					icon={faLaravel}
				/>
				<Technology
					icon={faPhp}
				/>
				<Technology
					icon={faJs}
				/>
				<Technology
					icon={faGit}
				/>
				<Technology
					icon={faGithub}
				/>
				<Technology
					icon={faCloudflare}
				/>
				<Technology
					icon={faHtml5}
				/>
				<Technology
					icon={faUbuntu}
				/>
				<Technology
					icon={faWindows}
				/>
				<Technology
					icon={faAws}
				/>
				<Technology
					icon={faDocker}
				/>
				<Technology
					icon={faFigma}
				/>
				<Technology
					icon={faDatabase}
				/>
				<Technology
					icon={faPython}
				/>
				<Technology
					icon={faPaypal}
				/>
				<Technology
					icon={faWordpress}
				/>
			</div>
		</div>
    </section>
  )
}

export default Technologies