---
id: "builtin:rails"
name: "Ruby on Rails"
description: "Rails conventions, Active Record, Action Controller, and Hotwire"
version: "1.0.0"
author: "MonkeysCode"
category: "framework"
triggers: [{"type":"framework","frameworks":["rails"]},{"type":"file_pattern","patterns":["app/controllers/**","app/models/**","config/routes.rb"]}]
examples: ["Create a Rails model with validations and associations","Implement a service object for complex business logic","Build a Turbo Frames partial update"]
tags: ["ruby","rails","activerecord","hotwire"]
builtin: true
enabled: true
icon: "symbol-namespace"
priority: 80
---
## Ruby on Rails Skill
- Follow Rails conventions: Convention over Configuration
- Use Active Record associations: has_many, belongs_to, has_many :through
- Use scopes for reusable query chains
- Use callbacks sparingly (prefer service objects)
- Use concerns for shared model/controller behavior
- Use Strong Parameters for mass assignment protection
- Use Hotwire (Turbo + Stimulus) for modern interactivity
- Use Active Job + Sidekiq for background processing
- Use Action Mailer for email
- Follow RESTful routing conventions
- Use database migrations with reversible blocks
- Use RSpec + FactoryBot for testing