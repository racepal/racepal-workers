import { expect } from 'chai'
import Client from 'ftp'
import * as C from './config'

describe('data fetcher', () => {
	it('should connect to host', done => {
		let host = process.env.FTP_HOST
		let username = process.env.FTP_USERNAME
		let password = process.env.FTP_PASSWORD
		let client = new Client()
		client.on('ready', () => {
			client.list((err, list) => {
				expect(list).to.be.an.array
				done()
			})
		})
		client.on('end', () => {

		})
		client.connect({
			host,
			user: username,
			password,
			keepalive: 1000
		})
	})
})