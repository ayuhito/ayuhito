import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
	tiers: [
		{
			title: 'Donors',
			preset: presets.small,
		},
		{
			title: 'Backers',
			monthlyDollars: 10,
			preset: {
				avatar: {
					size: 42,
				},
				boxWidth: 52,
				boxHeight: 52,
				container: {
					sidePadding: 30,
				},
			}
		},
		{
			title: 'Supporters',
			monthlyDollars: 25,
			preset: presets.medium,
		},
		{
			title: 'Patrons',
			monthlyDollars: 50,
			preset: presets.large,
		},
		{
			title: 'The Sponsors',
			monthlyDollars: 100,
			preset: presets.xl,
		},
	]
})