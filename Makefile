format:
	npx prettier --write "{,!(node_modules|public)/**/}*.{js,svelte}"

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
