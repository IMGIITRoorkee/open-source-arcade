fetch("/Contributors.md")
	.then((response) => response.text())
	.then((data) => {
		// Parse the data and create contributor cards
		const contributors = data.split("\n").filter((line) => line.trim() !== "")

		const contributorList = document.getElementById("contributorList")
		contributors.forEach((contributor) => {
			const [name] = contributor.split(",")

			// Fetch a random avatar from the Multiavatar API
			fetch("https://robohash.org/" + encodeURIComponent(name + ".png"))
				.then((response) => response.blob())
				.then((blob) => {
					const avatarURL = URL.createObjectURL(blob)

					const card = document.createElement("div")
					card.className = "contributor-card"

					const avatarImg = document.createElement("img")
					avatarImg.src = avatarURL
					avatarImg.alt = "Avatar"
					avatarImg.className = "contributor-avatar"

					const nameSpan = document.createElement("span")
					nameSpan.textContent = name

					card.appendChild(avatarImg)
					card.appendChild(nameSpan)

					contributorList.appendChild(card)
				})
				.catch((error) => console.error("Error fetching avatar:", error))
		})
	})
	.catch((error) => console.error("Error fetching data:", error))

function filterContributors() {
	const searchInput = document.getElementById("searchInput").value.toLowerCase()
	const contributorCards = document.querySelectorAll(".contributor-card")

	contributorCards.forEach((card) => {
		const name = card.querySelector("span").textContent.toLowerCase()
		if (name.includes(searchInput)) {
			card.style.display = "flex"
		} else {
			card.style.display = "none"
		}
	})
}
